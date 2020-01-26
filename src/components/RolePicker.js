import React from 'react';
import { connect } from 'react-redux';

import { pickRole } from '../actions';

const RolePicker = ({ roles, pickRole, setPlayerRole }) => {

    const handleSelect = value => {
        setPlayerRole(value);
        pickRole(value);
    }

    const renderRoles = () => {
        return roles.map(role => <option
            onClick={()=> handleSelect(role)}
            key={role}
            id={role}
            >
                {role}
            </option>);
    }

    return(
        <div className="RolePicker">
            <select name="role-picker" id="role-picker">
                {renderRoles()}
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {roles: state.roles}
}

export default connect(mapStateToProps, { pickRole })(RolePicker);