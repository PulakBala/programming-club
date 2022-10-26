import React from 'react';
import DisplayCp from '../DisplayCp/DisplayCp';

const CpcWings = () => {
    const cpc = [
        {
            head: 'ACM Task Force', 
            para: 'Where programmers become Gladiators. We organize workshop, classes, contests and many more.'
        },
        {
            head: ' Development', 
            para: 'The best way to get a project done faster is to start sooner Start development today.'
        },{
            head: 'Research & Journal', 
            para: 'Why do we do basic research? To learn about ourselves. Start learning yourself today.'
        },{
            head: 'Jobs, Career & Industry Collaboration', 
            para: 'Worried about your career Lets learn how to build a better and skilled career.'
        }
    ]
    return (
        <div  className='mt-10'>
            <p className='text-3xl font-bold'>PUCPC WINGS</p>
           <div className='grid md:grid-cols-2 gap-10 m-10'>
           {
                cpc.map((cp, idx) => <DisplayCp key={idx} cp={cp}></DisplayCp>)
            }
           </div>
        </div>
    );
};

export default CpcWings;