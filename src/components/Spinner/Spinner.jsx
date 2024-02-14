import React from "react";
import spinnerImg from '../../assets/img/34338d26023e5515f6cc8969aa027bca.gif';

let Spinner = () => {
    return (
        <React.Fragment>
            <div>
                <img src={spinnerImg} alt=""  className="d-block m-auto" style={{width: "150px"}}/>
            </div>
        </React.Fragment>
    )
}

export default Spinner;