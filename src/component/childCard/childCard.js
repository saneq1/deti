import React from "react";
import TextEllipsis from 'react-text-ellipsis';

const ChildCard = ({child}) => {
  const url = 'http://deti.dev.eit.edu.ru';

  return (
      <div className='card'>
        <div className='card-about'>
          <div className='card-about-name'>{child.name}</div>
          <div className='card-about-city'>{child.region?.title}</div>
          <div className='card-about-age'>{child.age}, {child.gender.id === 1 ? 'мальчик' : 'девочка'}</div>
            <TextEllipsis lines={7} ellipsisChars={'...'} tag={'p'} tagClass={'card-about-info'} >{child.character}</TextEllipsis>
        </div>
        <img src={`${url}${child.photo_path}`} alt="child"/>
      </div>
  );
};

export default ChildCard;