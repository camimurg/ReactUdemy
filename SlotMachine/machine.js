class Machine extends React.Component {
    handleClick() {

    }

    render() {
        const {uno, due, tre} = this.props;
        const winner = (uno === due && uno === tre)
            
        return (
            <div>
                <p> {uno} {due} {tre}</p>
                <p> {winner ? 'Winner!! Bravo' : 'LOOOOOSER'} </p>
            </div>
        )
    }
}
