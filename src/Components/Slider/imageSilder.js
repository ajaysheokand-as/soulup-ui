import './Slider.css'
import ImageSlider from './Slider';
import { SliderData } from '../../Data/companywork';

function Silder() {
  return (
    <>
    <h1>SoulUp in Media</h1>
    <ImageSlider slides={SliderData} />
    </>
  )
  ;
}

export default Silder;
