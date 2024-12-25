import { createContext, useState } from "react";
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    const handleTrailer = async (id) => {
        setTrailerKey('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setTrailerKey(data.results[0].key);
                setModalIsOpen(true);
            } else {
                console.warn('No trailer found for the movie.');
            }
        } catch (error) {
            setModalIsOpen(false);
            console.error('Error fetching trailer:', error);
        }
    };

    return (
        <MovieContext.Provider value={{ handleTrailer }}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 9999,
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                    },
                }}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />
            </Modal>
        </MovieContext.Provider>
    );
};

MovieProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { MovieProvider, MovieContext };
