import React from "react";

function Exercise({ exercise, onClose }) {
    console.log("Modal rendered for:", exercise);
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    className="modal-image"
                />
                <h2>{exercise.name}</h2>
                <p>
                    <strong>Body Part:</strong> {exercise.bodyPart}
                </p>
                <p>
                    <strong>Target Muscle:</strong> {exercise.target}
                </p>
                <p>
                    <strong>Equipment:</strong> {exercise.equipment}
                </p>
                {exercise.instructions && exercise.instructions.length > 0 && (
                    <div className="exercise-instructions">
                        <h3>Instructions</h3>
                        <ul>
                            {exercise.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Exercise;