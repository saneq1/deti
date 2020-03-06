import React from "react";
import './childCard.scss'
import TextEllipsis from 'react-text-ellipsis';

const url = 'http://deti.dev.eit.edu.ru';

const ChildCard = ({child}) => {

  return (
      <div className='card'>
        <div className='card-child'>
          <div className='card-child-name'>{child.name}</div>
          <div className='card-child-city'>{child.region?.title}</div>
          <div className='card-child-age'>{child.age}, {child.gender.id === 1 ? 'мальчик' : 'девочка'}</div>
          <TextEllipsis lines={7} ellipsisChars={'...'} tag={'p'}
                        tagClass={'card-about-info'}>{child.character}</TextEllipsis>
        </div>
        <img src={`${url}${child.photo_path}`} alt="child"/>
      </div>
  );
};

export default ChildCard;