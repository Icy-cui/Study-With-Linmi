import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import {actionCreators} from "../store"


export class List extends Component {
  render() {
    const { list, page } = this.props;
    return (
      <div>
        {list.map((item,index) => {
          return (
            <ListItem key={index}>
              <img className="pic" src={item.get('imgUrl')} alt="/" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        {/* 异步操作 */}
        <LoadMore onClick={()=>this.props.getMoreList(page)}>
          Load More...
        </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});

const mapDispatchToProps = (dispatch)=>({
  getMoreList(){
    dispatch(actionCreators.getMoreList())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(List);
