import React, { Component } from 'react';
import { connect } from 'react-redux';


class SongList extends Component {
    render() {

        // the return  in mapStateToProps ensures this.props=== { songs:state.songs };
        console.log(this.props);
        return (
            <div>
                SongList
            </div>
        );
    }
}
// ********** IMPORTANT*******************
// so in closing to get props into your component you will always connect state at the top 
// always call connect and add component as 2nd function call 
// always use mapStateToProps( you can use any other name but this is convention) and this will always recieve arg of STATE
//  and this will return an obj that will show up as props inside the component




const mapStateToProps = (state)=> {
    // console.log(state); this shows you the whole state object

    return { songs :state.songs };

};

export default  connect (mapStateToProps) (SongList);