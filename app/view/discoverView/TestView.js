
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as testActions} from '../../redux/test'

class TestView extends Component {
    componentDidMount() {
        this.props.fetchSection()
    }

    range(number) {
        return Array.apply(null, Array(number)).map((item, i) =>  {
            return i
        })
    }

    render() {
        const {section} = this.props
        console.log(section, 'section');
        return(
            <div>
                {this.range(10).map((item, index) => {
                    return (
                        <div key={item} className='test'>
                            <div className='test-img'></div>
                            <div className="test-cont">
                                <div className="test-name mg-b-10">name</div>
                                <div className="test-text">texttexttexttexttext</div>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }

}

const mapStateToProps = ({test}) => {
    const { section }  = test
    return {
        section
    }
}

export default connect(mapStateToProps, Object.assign({}, testActions))(TestView)
