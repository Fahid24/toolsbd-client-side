import React from 'react';
import Tool from './Tool';

const tools = [
    {
        _id: 1,
        name: 'LXT Combi Drill',
        image: 'https://www.toolstoreuk.co.uk/images/products/standard/1843_1668.jpg',
        description: 'The Makita DHP458 is an extremely compact tool with an overall length of 225 mm.',
        minimumOrder: '100',
        quantity: '1000',
        price: 'Tk 10000'

    },
    {
        _id: 2,
        name: 'Adjustable Wrench 12',
        image: 'https://images.othoba.com/images/thumbs/0348848_adjustable-wrench-12.jpeg',
        description: 'XparT Tools Adjustable wrench RG  Stainless steel  Adjustable open end Straight type',
        minimumOrder: '1000',
        quantity: '10000',
        price: 'Tk 427'
    },
    {
        _id: 3,
        name: 'Nose Pliers 6 Inches',
        image: 'https://images.othoba.com/images/thumbs/0348842_nose-pliers-6-inches.jpeg',
        description: 'As given picture Slim head design allows access into tight spaces Slip-resistant bi-material handle',
        minimumOrder: '500',
        quantity: '15000',
        price: 'Tk 180'
    },
    {
        _id: 4,
        name: 'Hammer 2 LBS',
        image: 'https://images.othoba.com/images/thumbs/0348658_ball-pin-hammer-2-lbs.jpeg',
        description: ' 2 lbsHickory handle General carpentry Standard head Ball pein wooden hamme Product repair',
        minimumOrder: '1000',
        quantity: '10000',
        price: 'Tk 319'
    },
    {
        _id: 5,
        name: 'Hand Saw 16 Inch',
        image: 'https://images.othoba.com/images/thumbs/0348835_hand-saw-16-inch.jpeg',
        description: ' 16 inch Hardened, tempered spring steel blade Teeth per inch for quick cutting, clean edges',
        minimumOrder: '',
        quantity: '',
        price: 'Tk 234'
    },
    {
        _id: 6,
        name: 'Pipe Wrench 12',
        image: 'https://images.othoba.com/images/thumbs/0348183_pipe-wrench-12.jpeg',
        description: 'XparT Tools S-12 Pipe wrench 65# carbon steel with rubber grip handle Mixed (As given picture).',
        minimumOrder: '500',
        quantity: '5000',
        price: 'Tk 369'
    }
]
const Tools = () => {
    return (
        <div className='pt-24'>
            <div className="divider">
                <h1 className='text-3xl text-primary font-bold text-center '>Our Tools</h1>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 sm:flex sm:grid justify-items-center   p-12'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;