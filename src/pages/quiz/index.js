import FormQuiz from "../../components/formQuiz";
const Quiz = ()=>{
    //lưu các question vào biến state của questionReducer(có thể lưu bằng useState cho dễ, nhưng mà lỡ lưu bằng redux, nếu lưu bằng state thì nhanh, đỡ lằng nhằng hơn redux, nhưng lưu bằng redux thì vẫn giữ được các biến cho tới khi tự ấn load lại trang(trang mà ko có dispatch))
    return (
        <>
          <FormQuiz></FormQuiz>
        </>
    )
}
export default Quiz;