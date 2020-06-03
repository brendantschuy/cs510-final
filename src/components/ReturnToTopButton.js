import React from 'react';

const ReturnToTopButton = () =>
    <div className="return-to-top">
        <button onClick={() => window.scrollTo(0, 0)}>
            Return to top
        </button>
    </div>

export default ReturnToTopButton;