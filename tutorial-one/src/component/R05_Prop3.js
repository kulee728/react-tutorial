const parent3 = (props) =>{

    const {num,name,age,gender,phone} = props;

    return(
        <div className="info-ex">
            <h3>
            번호 : {num}<br/>
            이름 : {name}<br/>
            나이 : {age}<br/>
            성별 : {gender}<br/>
            전화번호 : {phone}<br/>
            </h3>
        </div>
    )
}
export default parent3 