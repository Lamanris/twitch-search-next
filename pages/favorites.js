import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFavorites, deleteFromFavorites} from "../store/actions/mainActions";
import {MainLayout} from "../layouts/MainLayouts";

export default function Favorites () {
    const {favorites} = useSelector(state => state.main)
    const dispatch = useDispatch()

    useEffect(() => {setFavorites(dispatch)},[])

    return (
        <MainLayout>
            <div className="container">
                <h1 className="favorites__title">Favorites</h1>
                <div className="gallery">
                    {
                        favorites.reverse().map(el => (
                            <div key={el.id} className="gallery__video">
                                <img src={el['thumbnail_url'].replace('{width}', '300').replace('{height}', '300')} alt="thumbnail"/>
                                <div className="gallery__video-wrapper">
                                    <p>{el.title}</p>
                                    <a href={el.url} target="_blank">Перейти</a>
                                    <button className="btn gallery__video-wrapper__btn" onClick={() => deleteFromFavorites(dispatch, el)}>
                                        <svg height="365pt" viewBox="0 0 365.71733 365" width="365pt" xmlns="http://www.w3.org/2000/svg"><g fill="#f44336"><path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"/><path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"/></g></svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    )
}