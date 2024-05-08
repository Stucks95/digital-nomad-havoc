/* PRIME VUE COMPONENTS */
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputSwitch from 'primevue/inputswitch';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Message from 'primevue/message';

const getPrimeComps = () => {
    return [
        Toolbar, Button, InputSwitch, Carousel, Card, Calendar, InputNumber, Message
    ]
}

export default getPrimeComps