import React, {useEffect, useState} from "react";
import axios from 'axios';
import './test.scss';
import {bindActionCreators} from "redux";
import {childrenActions} from "../config/redux/children/childrenActions";

const Test = props => {
  const url = 'http://deti.dev.eit.edu.ru';
  const [childrens, setChildrens] = useState([]);
  const [params, setParams] = useState({
    limit: 6,
    page: 1
  });

  useEffect(() => {
    // props.getChildren(`/children?limit=${params.limit}&page=${params.page}`);
    // console.log(props.getChildren(`/children?limit=${params.limit}&page=${params.page}`));
    axios.get(`/children?limit=${params.limit}&page=${params.page}`).then(res => {
      if (res.status === 200) {
        console.log(res.data.rows);
        setChildrens(res.data.rows);
      }
    });
  }, []);

  return (
      <div className='child-container'>
        {childrens?.map(child => {
          return (
              <div className='child' key={child.id}>
                <div className="description">
                  <span>{child.name}</span><br/>
                  <span>{child.region.title}</span><br/>
                  <span>{child.age}, {child.gender.id === 1 ? 'мальчик' : 'девочка'}</span><br/>
                  <span>{child.character}</span>
                </div>
                <div className="image">
                  <img src={`${url}${child.photo_path}`}/>
                </div>
              </div>
          );
        })}
      </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.children.data,
    isLoading: state.children.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  bindActionCreators({
    getChildren: childrenActions.getChildren
  }, dispatch)
};
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Test);

export default Test;