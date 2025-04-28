import React from 'react';
import './Grid.css';

const texts = [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aliquid illo beatae? Blanditiis laboriosam id odio quidem nostrum ea perferendis dolor harum. Eaque, delectus veniam quod similique vero dolorem nam adipisci maiores!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor alias explicabo expedita, maiores iusto optio, earum deserunt veritatis fuga quasi!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, suscipit. Dolores impedit dolor quo, ea quos beatae suscipit. Enim corporis accusamus iure autem quia esse aut minima temporibus possimus rerum? Magni error unde distinctio at iusto hic sit perferendis.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis maiores nulla ab amet doloribus quia consequatur, itaque quasi placeat delectus explicabo animi vel.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus esse culpa voluptate assumenda quos in ipsa consectetur cum.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nisi laudantium dolorem voluptate doloremque? Expedita, nulla recusandae.',
];

const data = texts.map((text) => ({
    text,
    name: 'Gladis Lennon',
    role: 'Head of SEO',
    image: 'https://picsum.photos/id/633/40',
}));
console.log(data);

const Testimonial = ({ text, name, role, image }) => {
    return (
        <div className="testimonial">
            <p>{text}</p>
            <div className="author">
                <img src={image} alt={name} />
                <div>
                    <strong>{name}</strong>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    );
};

const Grid = () => {
    return (
        <div className='testimonial-grid'>
            {data.map((testimonial, index) => (
                <Testimonial key={index}{...testimonial} />
            ))}
        </div>
    )
}

export default Grid;