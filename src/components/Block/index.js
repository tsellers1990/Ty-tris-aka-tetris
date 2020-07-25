import React from 'react';

export function Row(){
    return(
        <div id = "row">
            <div id="blocks"></div>
            <div id="blocks"></div>
            <div id="blocks"></div>
            <div id="blocks"></div>
            <div id="blocks"></div>
            <div id="blocks"></div>
        </div>
    )
}

export function Grid() {
    return(
        <>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </>
    )
}