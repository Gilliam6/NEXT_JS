import MeetupList from "../components/meetups/MeetupList"


const MEETUPS_LIST = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://sheffield.digital/wp-content/uploads/2020/05/Zoom-meetings-screens.jpg',
        address: 'moscowlandia, tverskaya st., 8, 60',
        description: 'time to know each other'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://www.42workspace.com/wp-content/uploads/2020/03/glenn-carstens-peters-npxXWgQ33ZQ-unsplash-1024x681.jpg',
        address: 'moscowlandia, tverskaya st., 8, 60',
        description: 'time work together'
    },
    {
        id: 'm3',
        title: 'Third meetup',
        image: 'https://www.42workspace.com/wp-content/uploads/2020/03/alvaro-reyes-qWwpHwip31M-unsplash-1024x683.jpg',
        address: 'moscowlandia, tverskaya st., 8, 60',
        description: 'time to think about future'
    }
];


function HomePage() {
    return (
        <MeetupList meetups={MEETUPS_LIST}></MeetupList>
    );
}

export default HomePage;