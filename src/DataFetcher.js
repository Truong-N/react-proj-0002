import React from "react"

export default class DataFetcher extends React.Component {
    state = {
        loading: false,
        data: null
    }

    componentDidMount() {
        this.setState({loading:true})
        fetch(this.props.url)
            .then(rep => rep.json())
            .then(data => this.setState({data: data, loading: false}))
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.data, this.state.loading)}
            </div>
        )
    }
}