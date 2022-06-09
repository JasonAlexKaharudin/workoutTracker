import React from 'react'

const FormButton = ({ id, title, handleClick }) => {
    return (
        <>
            <button
                id={id}
                className="px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                onClick={handleClick}
            >
                {title}
            </button>
        </>

    )
}

export default FormButton;