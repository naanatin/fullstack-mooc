const Course = ({ course }) => {

    const Header = ({header}) => {
        console.log('header object', header);
        return (            
            <div>
                <h2>{header.name}</h2>
            </div>
        )
    }

    const Content = ({content}) => {
        return (
            <div>
                {content.map(courseunit => <p key={courseunit.id}>{courseunit.name} {courseunit.exercises}</p>)}
            </div>
        )
    }

    const Total = ({total}) => {
        console.log('total courses', {total});
        const coursetotals = total.map(totals => totals.exercises)
        const sum = coursetotals.reduce((s, p) => s + p)
        return (
            <div>
                <p><b>Total of {sum} exercises.</b></p>
            </div>
        )
    }

    const Unit = ({unit}) => {
        console.log('unit', unit);
        return (
            <div>
                <Header header={unit} />
                <Content content={unit.parts} />
                <Total total={unit.parts}/>
            </div>
        )
    }

    return (
        <div>
            {course.map(courseunit => <Unit key={courseunit.id} unit={courseunit}/>)}
        </div>
    )

}

export default Course