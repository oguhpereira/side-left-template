import React from 'react'

const PageP = (numberPage,backgroundPage,title,Content) => (
    <div>
        <div className="page" id={numberPage} style={{backgroundColor: backgroundPage}}>
            <div className="icon"><span className="title">{title}</span>
                <div className="hint">
                    <Content></Content>
                </div>
            </div>
        </div>
    </div>
)

export default PageP 