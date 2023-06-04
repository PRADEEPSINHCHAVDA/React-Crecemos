import './BestRecipes.css'
import './ResponsiveRecipes.css'
import { RecipePost } from './Post/RecipePost'

import PicRecipe1 from '../../../assets/service5.jpg'
import PicRecipe2 from '../../../assets/services2.svg'
import PicRecipe3 from '../../../assets/services2.svg'
import PicRecipe4 from '../../../assets/service4.jpg'

export const BestRecipes = () => {
    return (
        <section className="bRecipes">
            <div className="recipes">
                <div className="infos">
                    <h2>Our Services</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vakalia and Consonantia, there live the blind texts</p>
                </div>
                
                <div className="recipe-posts">
                    <RecipePost title='Mobile App Development' 
                    src={PicRecipe1}
                    alt='A imagem of a beauty Broccoli Salad With Bacon'/>

                    <RecipePost title='Web App Development'
                    src={PicRecipe2}
                    alt='A imagem of a beauty Classic Beef Burgers'/>

                    <RecipePost title='On-demand product development'
                    src={PicRecipe3}
                    alt='A imagem of a beauty Classic Potato Salad'/>

                    <RecipePost title='best '
                    src={PicRecipe4}
                    alt='A imagem of a beauty Cherry Cobbler on the Grill'/>
                </div>
            </div>
        </section>
    )
}