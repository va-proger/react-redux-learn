import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';

function App() {
    const data = [
        {
            'title': 'Подготовка к обновлениям курсов',
            'date': new Date(),
            'text': 'Горные походы открывают удимительные природные ландшафты'
        },
        {
            'title': 'Поход в горы',
            'date': new Date(),
            'text': 'Думал, что очень много времени'
        }
    ];
    return (
        <>
            <h1>Проект</h1>
            <p>Какое то описание</p>
            <Button/>
            <JournalItem
                title={data[0].title}
                text={data[0].text}
                date={data[0].date}
            />
            <JournalItem
                title={data[1].title}
                text={data[1].text}
                date={data[1].date}
            />
        </>

    );
}

export default App;