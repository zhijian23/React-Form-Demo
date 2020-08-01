import React from "react";
import "./data.css";
const data = require("./iris.json");


function Data() {

    const header = data[0];

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
            onClick={()=>}>Logout</button>

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