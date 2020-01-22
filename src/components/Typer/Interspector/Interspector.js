import React, {Component} from 'react';
import styles from './Interspector.module.sass';

class Interspector extends Component{
    state = {
        dividerStatus:true,
        dividerClasses:[
            styles.divider,
            styles.divider_on
        ]
    };

    dividerPulse(){
        setInterval(()=>{
            if(this.state.dividerStatus){
                this.setState({
                    dividerStatus: !this.state.dividerStatus,
                    dividerClasses:[
                        styles.divider,
                        styles.divider_off
                    ]
                })
            }else{
                this.setState({
                    dividerStatus: !this.state.dividerStatus,
                    dividerClasses:[
                        styles.divider,
                        styles.divider_on
                    ]
                })
            }
        },500)
    }

    componentDidMount() {
        this.dividerPulse()
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className={styles.frame + " col-auto"}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className={styles.done}>{this.props.inputString}</div>
                                <div className={this.state.dividerClasses.join(' ')} id="divider"/>
                                <div className={styles.wait}>{this.props.outString}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Interspector;