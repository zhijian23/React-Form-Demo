import React from "react";
import "./data.css";
import { useHistory } from "react-router-dom";
const data = require("./iris.json"); //import iris dataset


function Data() {

    // store the first row of data as header
    const header = data[0];

    const history = useHistory();

    // create header for the data table
    function renderHeader(data) {
        return Object.keys(data).map((header) =>
            <th>{header}</th>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to Iris Dataset!</h1>
            <button
                className="logout"
                onClick={() => history.push("/")}>
                Logout
            </button>

            <hr noshade="2" size="3" style={{ marginBottom: "5%" }} />

            <table>
                <thead>
                    <tr>{renderHeader(header)}</tr>
                </thead>
                <tbody>
                    {data.map((title) =>
                        <tr>
                            <td align="center" style={{ width: "50px" }}>{title.petalLength}</td>
                            <td align="center" style={{ width: "50px" }}>{title.petalWidth}</td>
                            <td align="center" style={{ width: "50px" }}>{title.sepalLength}</td>
                            <td align="center" style={{ width: "50px" }}>{title.sepalWidth}</td>
                            <td align="center" style={{ width: "50px" }}>{title.species}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Data;