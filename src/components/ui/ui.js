import React from 'react'
import ObjectPeople from '../../entities/Users';

const RenderedJsx=()=>{
    const renderedarray=[]
    ObjectPeople.map((element)=>{
        return (
            <div>
                <p>{element.gender}</p>
                <p>{element.name}</p>
                <p>{element.email}</p>
            </div>
        ).push(renderedarray);

    })
return renderedarray;
}
export default RenderedJsx;