import React from 'react';

// class DoodleDisplay extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render () {
//         return (
//             <div className="doodle" >
//                 <img src={`${this.props.doodle}`} />
//             </div>
//         )
//     }
// }
// export default connect()(DoodleDisplay);

/* 
    TODO - Projects/Doodles should be folders with potential for images and javascript and all sorts of custom set ups
*/

export default (props) => {
	return (
        <div className="doodle" >
            <img alt="a doodle" src={`${props.doodle}`} />
        </div>
    )
}