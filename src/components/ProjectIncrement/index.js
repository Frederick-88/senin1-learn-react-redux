import React from "react";
import { connect } from "react-redux";
import { ADDVALUE, DECREASEVALUE } from "../../Reducer";

const ProjectIncrement = (props) => {
  const { valueNumber } = props;

  const addValue = () => {
    props.dispatch({ type: ADDVALUE });
  };

  const decreaseValue = () => {
    props.dispatch({ type: DECREASEVALUE });
  };

  return (
    <div>
        <div class="alert alert-dismissible alert-danger">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>
      <div className="card text-center bg-dark text-light pt-5 pb-5">
            <h1>TOTAL VALUE IS : <br/>
            {valueNumber}</h1>
        <div className="card-body">
          <h5 className="card-title">Try This Increment made With React-Redux!</h5>
          
          <button onClick={addValue} className="btn btn-outline-success">
          ADD VALUE
        </button>
        <button onClick={decreaseValue} className="btn btn-outline-success ml-4">
          DECREASE VALUE
        </button>

        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    valueNumber: state.valueNumber,
  };
};

export default connect(mapStateToProps)(ProjectIncrement);
