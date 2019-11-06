import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setTitle } from './../../helpers';

import './style.css';
import img1 from './echart1.png';
import img2 from './echart2.png';
import img3 from './echart3.png';

function PageHome(props) {
    
    setTitle('Home Page', props.pageTitle.title, props.dispatch);
    
    return (
        <>
            <section>
                <h2>The Echarts Example</h2>
                <p>The service provides simple persons data entry and plotting the <a href='https://echarts.apache.org/examples/en/index.html'>Echart</a>.</p>
                <p>You may <Link to='/list'>view the list</Link> or <Link to='/echarts'>Echart</Link>, as well as enter new data.</p>
                <div className='img-galery'>
                    <figure className='img-galery__container'>
                        <img src={img1} alt='echart' className='img-galery__img' />
                        <figcaption className='img-galery__title'>Echart Example Lorem ipsum</figcaption>
                    </figure>
                    <figure className='img-galery__container'>
                        <img src={img2} alt='echart' className='img-galery__img' />
                        <figcaption className='img-galery__title'>Echart Example Lorem ipsum</figcaption>
                    </figure>
                    <figure className='img-galery__container'>
                        <img src={img3} alt='echart' className='img-galery__img' />
                        <figcaption className='img-galery__title'>Echart Example Lorem ipsum</figcaption>
                    </figure>
                </div>
            </section>
            <article>
                <h2>Technical Description</h2>
                <section>
                    <h3>Прототип выполнен согласно заданию, реализованы:</h3>
                    <ul className='list'>
                        <li className='list__list-item'>система <strong>ввода данных в форме</strong></li>
                        <li className='list__list-item'><strong>просмотр</strong> введенных данных в списке</li>
                        <li className='list__list-item'>построение <strong>динамического графика</strong></li>
                        <li className='list__list-item'><strong>ReactJS</strong></li>
                        <li className='list__list-item'><strong>CSS3</strong> (использование Sass и/или Bootstrap упростило бы задачу, тем не менее, выполнено на чистом CSS3 согласно заданию)</li>
                        <li className='list__list-item'><strong>добавление/просмотр</strong> (POST и GET), <strong>список</strong> (GET), <strong>чарт (GET).</strong></li>
                    </ul>
                    <p className='unimportant-text'>Для ТЕСТИРОВАНИЯ написан бэк на PHP, но он не имеет значения, на бэк не претендую!</p>
                    <ul className='list'>
                        <li className='list__list-item'>
                            <strong>Протестировать</strong> прототип можно по ссылке <a href='https://echarts.000webhostapp.com/'>https://echarts.000webhostapp.com</a>
                        </li>
                        <li className='list__list-item'>
                            Взглянуть на <strong>код</strong> можно в репозитории <a href='https://github.com/kulakovValery/echarts'>https://github.com/kulakovValery/echarts</a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>API</h3>
                    <ul  className='list'>
                        <li className='list__list-item'><mark>GET</mark>
                            <ul className='list'>
                                <li className='list__list-item'><strong>/api/persons</strong> – список всех персон</li>
                                <li className='list__list-item'><strong>/api/persons/[id]</strong> – персона по id</li>
                            </ul>
                        </li>
                        <li className='list__list-item'><mark>POST</mark>
                            <ul className='list'>
                                <li className='list__list-item'><strong>/api/persons</strong> – добавить персону</li>
                            </ul>
                        </li>
                    </ul>
                    <p>Для вывода списка и Echarts используем <strong>/api/persons</strong>, для вывода информации о конкретной персоне – <strong>/api/persons/[id]</strong>, для добавления персоны – POST-запрос <strong>/api/persons</strong>, в ответ на который от сервера при успехе ожидается информация для динамичного добавления на график / в список.</p>
                    <p>При попытке получить персону по ID вся имеющаяся информация доступна в хранилище, тем не менее, делаем запрос к серверу, для демонстрации (по заданию).</p>
                </section>
                <section>
                    <h3>В проекте использованы следующие зависимости:</h3>
                    <ul className='list'>
                        <li className='list__list-item'><strong>axios</strong> – упрощает создание запросов к серверу, сама кодирует данные в JSON></li>
                        <li className='list__list-item'><strong>echarts-for-react</strong> – компонент для вывода Echarts</li>
                        <li className='list__list-item'><strong>react-router</strong> – для работы с маршрутизацией на front-end</li>
                        <li className='list__list-item'><strong>redux, react-redux</strong> – глобальное хранилище состояний</li>
                        <li className='list__list-item'><strong>redux-saga</strong> - упрощает работу с побочными эффектами (side effect), их тестирование; в данном проекте не обязательна, так как проект простой, тем не менее, использована для демонстрации навыков</li>
                        <li className='list__list-item'><strong>redux-form</strong> – для упрощения работы с формой ввода (в данном проекте также не обязательна, так как форма проста; можно было легко реализовать форму - управляемый компонент, redux-form использован для демонстрации)</li>
                    </ul>
                </section>
                <section>
                    <h3>Дополнительная информация</h3>
                    <p>Некоторые компоненты спроектированы как функции, некоторые – как классы <strong>(для примера)</strong>.</p>
                    <p>При возникновении ошибки получения данных всплывает сообщение со статусом ошибки, статус берется из хранилища, в которое поступает из соответствующей <strong>saga</strong>.</p>
                    <p>Форма ввода данных размещена рядом со списком, а также рядом с графиком для удобства.</p>
                    <p>Дополнительный функционал (вроде мобильной версии приложения, фильтрации/сортировки данных) не требовался, поэтому отсутствует.</p>
                </section>
            </article>
        </>
    )
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);

export default connect(mapStateToProps)(PageHome);