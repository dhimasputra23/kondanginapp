import React, { useEffect, useState, useSearchParams , useRef} from 'react'
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Form, Input, Modal, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { Provider } from 'react-redux';
import store from '../../store';
import moment from 'moment'
import { getUndangan } from '../../store/action';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => 
{
    return(
        <div className="clock block_clock" data-config=''>
            <div className="face_wrapper">
                <div className="face face_days">
                    <div className="time days">00</div>
                    <div className="label">Days</div>
                </div>
                <div className="face face_hours">
                    <div className="time hours">00</div>
                    <div className="label">Hours</div>
                </div>
                <div className="face face_minutes">
                    <div className="time minutes">00</div>
                    <div className="label">Mins</div>
                </div>
                <div className="face face_seconds">
                    <div className="time seconds">00</div>
                    <div className="label">Secs</div>
                </div>
            </div>
        
        </div>
    );
};

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        <div className="clock block_clock" data-config='{}'>
            <div className="face_wrapper">
                <div className="face face_days">
                    <div className="time days"><span>{days}</span></div>
                    <div className="label">Days</div>
                </div>
                <div className="face face_hours">
                    <div className="time hours"><span>{hours}</span></div>
                    <div className="label">Hours</div>
                </div>
                <div className="face face_minutes">
                    <div className="time minutes"><span>{minutes}</span></div>
                    <div className="label">Mins</div>
                </div>
                <div className="face face_seconds">
                    <div className="time seconds"><span>{seconds}</span></div>
                    <div className="label">Secs</div>
                </div>
            </div>
        
        </div>
    );
  }
};

const SilverTiga = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    moment.locale('id')
    const [modalRekening, setModalRekening] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()

    const displayUndangan = () => {
        dispatch(getUndangan())
    }

    useEffect(() => {
        displayUndangan()


    }, [])

    const showModal = (id) => {

        if (id === 1) {

            setIsModalOpen(true)
        } else {

            setModalRekening(true);
        }

    };

    const handleOk = (id) => {

        if (id === 1) {
            setIsModalOpen(false);
        } else {
            setModalRekening(false);
        }

    };

    const handleCancel = (id) => {

        if (id === 1) {
            setIsModalOpen(false);
        } else {
            setModalRekening(false);
        }
    };

    const a = state.undangan.data

    const [audioStatus, changeAudioStatus] = useState(true);
    const myRef = useRef();

    const startAudio = () => {
        myRef.current.play();
        changeAudioStatus(true);
    };

    const pauseAudio = () => {
        myRef.current.pause();
        changeAudioStatus(false);
    };

    const onFinish = async (values) => {
        values['tamu_id'] = a? a.tamu.id : null;
        try {
        let res = await fetch(`${window.location.origin}/api/submit_ucapan`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify(values),
        });
        let resJson = await res.json();
        if (res.status === 200) {
            displayUndangan()
        } else {
            
        }
        } catch (err) {
        console.log(err);
        }
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>

            <div id="page-container">
                <div id="main-content">
                    <article id="post-378605" className="post-378605 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="et-l et-l--post">
                                <div className="et_builder_inner_content et_pb_gutters3">
                                    <div id="welcome-gate" className="et_pb_section et_pb_section_0 et_animated et_pb_with_background et_section_regular" style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 4, 10, 0.36) 68%, #000c0f 100%),url("${a && a.fotoBackgrounds.some(el => (el.flag == "Background-1")) ? a.fotoBackgrounds.find(el => {return el.flag == "Background-1"}).url : ''}")` }}>
                                        <div className="et_pb_row et_pb_row_0">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_with_border et_pb_module et_pb_text et_pb_text_0 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <h5>Dear,</h5>
                                                        <p>{a? state.tamu.nama : ''}</p>
                                                        <h2>You Are Invited!</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_1">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_code et_pb_code_0">
                                                    <div className="et_pb_code_inner">
                                                    </div>
                                                </div>
                                                
                                                <div className="et_pb_module et_pb_text et_pb_text_1 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <p><span>The Wedding Celebration of</span></p>
                                                        {a ? <h1>   <span>{state.pria} &amp; {state.wanita}</span>   </h1> : []}
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href="#" data-icon="">Open Invitation</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 56%, #a7acb2 100%),url("${a && a.fotoBackgrounds.some(el => (el.flag == "Background-2")) ? a.fotoBackgrounds.find(el => {return el.flag == "Background-2"}).url : ''}")` }}>
                                        <div className="et_pb_row et_pb_row_2">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dvmd_text_on_a_path dvmd_text_on_a_path_0 dvmd_tp_version_1_1_3">
                                                    <div className="et_pb_module_inner">
                                                        <h1>
                                                            <svg id="dvmdtpsvg" width={130} height="100%" viewBox="0 -17.5 130 17.5">
                                                                <path id="wJMDBZlSEVGFcbskozJVcbIwoVswDqvO" className="mainPath" d="M0 0 C43.333333333333 -23.333333333333 86.666666666667 -23.333333333333 130 0 " />
                                                                <path id="displayPath" d="M0.13 -0.06993 C43.376666666667 -23.310023333333 86.623333333333 -23.310023333333 129.87 -0.069929999999999 " vectorEffect="none" />
                                                                <text dy="-0.1em" dx="2px 2px 2px 2px 2px 2px 2px 2px 2px 2px 2px ">
                                                                    <textPath id="textPath" xlinkHref="#wJMDBZlSEVGFcbskozJVcbIwoVswDqvO" startOffset="50%">Our Wedding</textPath>
                                                                </text>
                                                            </svg>
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_2 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                       { a ?  <p><span>{state.undangan.data.profilPasangans[0].nama} &amp; {state.undangan.data.profilPasangans[1].nama} </span></p> : [] }
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_center et_pb_space">
                                                    <div className="et_pb_divider_internal" />
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_3 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        { a ?  <p>{moment(state.undangan.data.subAcaras[1].start_time).format('LL')}</p> : []}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_3">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_4 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <p>{a ? <p>“{state.undangan.data.quote[0].kalimat}“</p>  : [] }</p>
                                                        
                                                        <p>( {a ? state.undangan.data.quote[0].sumber : [] } )</p>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_3 et_animated et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider" style={{ backgroundImage: `linear-gradient(180deg, #a7acb2 0%, rgba(255, 255, 255, 0) 48%),url("${a && a.fotoBackgrounds.some(el => (el.flag == "Background-3")) ? a.fotoBackgrounds.find(el => {return el.flag == "Background-3"}).url : ''}")` }}>
                                        <div className="et_pb_top_inside_divider et-no-transition" />
                                        <div className="et_pb_row et_pb_row_4">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_typing_text dipi_typing_text_0">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-typing">
                                                            <span className="dipi-typing-text-prefix" />
                                                            <span className="dipi-typing-wrap">
                                                                <span className="dipi-typing-text" data-dipi-loop="false" data-dipi-speed="50ms" data-dipi-backspeed="100ms" data-dipi-backdelay="100ms" data-dipi-show-cursor="true" data-dipi-cursor-char=" " data-dipi-typing-strings="[&quot;Hari yang ditunggu&quot;]" data-dipi-typing-inviewport="on" data-dipi-typing-offset="75%" />
                                                            </span>
                                                            <span className="dipi-typing-text-suffix" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module dipi_countdown dipi_countdown_0 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <Countdown
                                                            date={a? new Date(state.undangan.data.subAcaras[0].start_time) :'2023-03-07 08:00'}
                                                            renderer={renderer}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_4 et_section_regular">
                                        <div className="et_pb_row et_pb_row_5 two-columns et_pb_equal_columns">
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_animated  et_pb_text_align_right  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header">{a ? <span>{state.undangan.data.profilPasangans[1].nama}</span> : []}
                                                            </h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p><strong>Putri dari</strong><br />Bapak &nbsp;
                                                                   { a ?  <span>{state.undangan.data.profilPasangans[1].nama_bapak}&nbsp;</span> : [] }  <br />&amp; Ibu { a ?  <span>{state.undangan.data.profilPasangans[1].nama_ibu}</span> : []}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0 et_animated clearfix  et_pb_text_align_right et_pb_bg_layout_light">
                                                    {/* <li className="et_pb_social_media_follow_network_0 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="http://instagram.com/kondangin.idn/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_0 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" width={400} height={400} src={`${a?a.profilPasangans[1].url_foto:''}`} alt title="silver3 (1)" srcSet={`${a?a.profilPasangans[1].url_foto:''} 400w, ${a?a.profilPasangans[1].url_foto:''} 300w, ${a?a.profilPasangans[1].url_foto:''} 150w`} sizes="(max-width: 400px) 100vw, 400px" className="wp-image-378619" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_6 two-columns et_pb_equal_columns">
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_module et_pb_image et_pb_image_1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={400} height={400} src={`${a?a.profilPasangans[0].url_foto:''}`} alt title="silver3 (2)" srcSet={`${a?a.profilPasangans[0].url_foto:''} 400w, ${a?a.profilPasangans[0].url_foto:''} 300w, ${a?a.profilPasangans[0].url_foto:''} 150w`} sizes="(max-width: 400px) 100vw, 400px" className="wp-image-378608" /></span>
                                                </div>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_1 et_animated  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>{a ? state.undangan.data.profilPasangans[0].nama : []}</span>
                                                            </h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p><strong>Putra dari</strong><br />Bapak { a ?  <span>{state.undangan.data.profilPasangans[0].nama_bapak}</span> : [] } <br />&amp; Ibu &nbsp;
                                                                    <span>{a ? state.undangan.data.profilPasangans[0].nama_ibu : []}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_1 et_animated clearfix  et_pb_text_align_left et_pb_bg_layout_light">
                                                    {/* <li className="et_pb_social_media_follow_network_1 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="http://instagram.com/kondangin.idn/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider" style={{ backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0.81) 0%,#ffffff 100%),url("${a && a.fotoBackgrounds.some(el => (el.flag == "Background-4")) ? a.fotoBackgrounds.find(el => {return el.flag == "Background-4"}).url : ''}")` }}>
                                        <div className="et_pb_top_inside_divider et-no-transition" />
                                        <div className="et_pb_with_border et_pb_row et_pb_row_7">
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_0 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Akad
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Nikah
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_5 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p> <strong> {a ? moment(state.undangan.data.subAcaras[0].start_time).format('dddd') : [] }, {a ? moment(state.undangan.data.subAcaras[0].start_time).format('LL') : [] } </strong> <br />   </p>
                                                            
                                                            
                                                        {a ? <p>{moment(state.undangan.data.subAcaras[0].start_time).format('LT')} s/d {moment(state.undangan.data.subAcaras[0].end_time
                                                        ).format('LT')} &nbsp; WIB</p> : []} { a ? <strong>{state.undangan.data.subAcaras[0].tempat}</strong> : [] }<br />
                                                           <p> { a ? state.undangan.data.subAcaras[0].alamat : []} </p>
                   
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_1 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Resepsi
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Pernikahan
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_6 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                    <p> <strong> {a ? moment(state.undangan.data.subAcaras[1].start_time).format('dddd') : [] }, {a ? moment(state.undangan.data.subAcaras[1].start_time).format('LL') : [] } </strong> <br />   </p>
                                                            
                                                            
                                                            {a ? <p>{moment(state.undangan.data.subAcaras[1].start_time).format('LT')} s/d {moment(state.undangan.data.subAcaras[1].end_time
                                                            ).format('LT')} &nbsp; WIB</p> : []} { a ? <strong>{state.undangan.data.subAcaras[1].tempat}</strong> : [] }<br />
                                                               <p> { a ? state.undangan.data.subAcaras[1].alamat : []} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_8">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_1 et_animated et_pb_bg_layout_light" href={a? `https://www.google.com/maps/place/${a.subAcaras[0].lattitude},${a.subAcaras[0].longitude}` : '#'} target="_blank" data-icon="">Lihat Lokasi</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_6 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_9">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_2 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Amplop
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Digital
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_7 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan
                                                            mengirimkannya melalui tautan berikut:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_10 two-columns">
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_13  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_3 et_animated et_clickable  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                    <div className="et_pb_main_blurb_image" onClick={() => showModal(1)}><span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_14  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_4 et_animated et_clickable  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                    <div className="et_pb_main_blurb_image" onClick={() => showModal(0)}><span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="et_pb_section et_pb_section_9 et_section_regular">
                                        <div className="et_pb_row et_pb_row_16">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_20  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_3 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Happy
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Moments
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_code et_pb_code_1" style={{ marginBottom: '30px' }}>
                                                    <div className="et_pb_code_inner">
                                                        <div className="wonderpluginaudio" id="wonderpluginaudio-382" data-audioplayerid={382} data-width={48} data-height={600} data-skin="button48" data-progressinbar="true" data-showinfo="false" data-showimage="false" data-autoplay="false" data-random="false" data-autoresize="false" data-responsive="false" data-showtracklist="false" data-tracklistscroll="true" data-showprogress="false" data-showprevnext="false" data-showloop="false" data-stopotherplayers="true" data-preloadaudio="true" data-showtracklistsearch="false" data-saveposincookie="false" data-wptracklist="false" data-removeinlinecss="true" data-showtime="false" data-showvolume="false" data-showvolumebar="true" data-showliveplayedlist="false" data-showtitleinbar="false" data-showloading="false" data-enablega="false" data-titleinbarscroll="true" data-donotinit="false" data-addinitscript="false" data-imagewidth={100} data-imageheight={100} data-loop={1} data-tracklistitem={10} data-titleinbarwidth={80} data-gatrackingid data-playbackrate={1} data-playpauseimage="playpause-48-48-1.png" data-playpauseimagewidth={48} data-playpauseimageheight={48} data-cookiehours={240} data-prevnextimage="prevnext-24-24-0.png" data-prevnextimagewidth={24} data-prevnextimageheight={24} data-volumeimage="volume-24-24-0.png" data-volumeimagewidth={24} data-volumeimageheight={24} data-liveupdateinterval={10000} data-maxplayedlist={8} data-playedlisttitle="Last Tracks Played" data-loopimage="loop-24-24-0.png" data-loopimagewidth={24} data-loopimageheight={24} data-infoformat="<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>
                                      <div class='amazingaudioplayer-info-description'>%INFO%</div>" data-jsfolder="https://ngantenstory.com/wp-content/plugins/wonderplugin-audio/engine/" style={{ display: 'block', position: 'relative', margin: '0 auto', width: 48, height: 'auto' }}>
                                                            <div className="amazingaudioplayer-player-wrapper">
                                                                <div className="amazingaudioplayer-bar">
                                                                    <div className="amazingaudioplayer-playpause" style={{ display: 'block' }}>
                                                                        {audioStatus ? (
                                                                            // <Button onClick={pauseAudio}>pause</Button>
                                                                            <div onClick={pauseAudio} className="amazingaudioplayer-pause" style={{ display: 'block', width:'48px', height:'48px', cursor: 'pointer', backgroundImage:'url(../wp-content/plugins/wonderplugin-audio/engine/playpause-48-48-1.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right top' }}></div>
                                                                        ) : (
                                                                            <div onClick={startAudio} className="amazingaudioplayer-play" style={{ display: 'block', width:'48px', height:'48px', cursor: 'pointer', backgroundImage:'url(../wp-content/plugins/wonderplugin-audio/engine/playpause-48-48-1.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left top' }}></div>
                                                                            // <Button onClick={startAudio}>start</Button>
                                                                        )}
                                                                        </div>
                                                                        <div className="amazingaudioplayer-bar-buttons-clear">
                                                                        </div>
                                                                    </div>
                                                                <div className="amazingaudioplayer-bar-clear">
                                                                </div>
                                                            </div>
                                                            <audio ref={myRef} preload="auto" loop={true} style={{display: 'none'}} src={a? a.musik[0].url : ''}></audio>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_10 et_section_regular">
                                        <div className="et_pb_row et_pb_row_17 et_pb_gutters1">
                                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_21  et_pb_css_mix_blend_mode_passthrough">
                                                {a && a.fotos && a.fotos.length>0 ?

                                                state.undangan.data.fotos.map((foto, index) => (

                                                    <div key={index} className={`et_pb_module et_pb_image et_pb_image_${index+4} pa-image-1-1 et_animated et-waypoint`}>
                                                        <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={800} height={1200} src={`${foto.url}`} alt title="silver3 (1)"  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" className="wp-image-378618" /></span>
                                                    </div>

                                                ))
                                                :
                                                null

                                                }
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_6 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_9">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_2 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Ucapan
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            & Doa
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_7 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Kami tidak sabar menunggu hari pernikahan kami bersama
                                                            Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i.
                                                            Terima kasih.</p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_code et_pb_code_2">
                                                    <div className="et_pb_code_inner">
                                                    <div className="fluentform fluentform_wrapper_1">
                                                            <div className="site-card-border-less-wrapper">
                                                                <Card hoverable title="Kirim Ucapan & Doa" bordered={false} style={{ textAlign: 'center' }}>

                                                                    <Form
                                                                    form={form}
                                                                    initialValues={{
                                                                        nama: a? state.tamu.nama : '',
                                                                      }}
                                                                    onFinish={onFinish}
                                                                    onFinishFailed={onFinishFailed}
                                                                    >

                                                                        <Form.Item
                                                                            name={'nama'}
                                                                            style={{ marginBottom: 10 }}
                                                                            rules={[{ required: true, message: 'Nama Wajib Di isi!' }]}
                                                                        >

                                                                            <Input placeholder=" Nama Anda" prefix={<UserOutlined />} />

                                                                        </Form.Item>

                                                                        <Form.Item
                                                                            name={'kalimat'}
                                                                            style={{ marginBottom: 5 }}
                                                                            rules={[{ required: true, message: 'Ucapan & Doa Wajib Di isi!' }]}
                                                                        >
                                                                            <TextArea
                                                                                showCount
                                                                                maxLength={200}
                                                                                style={{ height: 120, marginBottom: 24 }}
                                                                                onChange={() => { }}
                                                                                placeholder="Ucapan & Doa"
                                                                            />
                                                                        </Form.Item>

                                                                        <Form.Item
                                                                            name={'konfirmasi'}
                                                                            style={{ textAlign: 'left' }}
                                                                            rules={[{ required: true, message: 'Konfirmasi Wajib Di isi!' }]}
                                                                        >
                                                                            <Select style={{ width: 200 }}
                                                                                // defaultValue="lucy"
                                                                                placeholder="Konfirmasi Kehadiran"
                                                                                // style={{ width:  }}
                                                                                onChange={() => { }}
                                                                                options={[
                                                                                    { value: 'Hadir', label: 'Hadir' },
                                                                                    { value: 'Tidak Hadir', label: 'Tidak Hadir' },

                                                                                ]}
                                                                            />
                                                                        </Form.Item>


                                                                        <Form.Item>
                                                                            <div style={{ textAlign: 'right' }}>
                                                                                <Button htmlType="submit">Kirim</Button>
                                                                            </div>
                                                                        </Form.Item>    
                                                                        

                                                                    </Form>

                                                                </Card>
                                                            </div>
                                                            <div id="fluentform_1_errors" className="ff-errors-in-stack ff_form_instance_1_1 ff-form-loading_errors ff_form_instance_1_1_errors">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="et_pb_with_border et_pb_section et_pb_section_11 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_row et_pb_row_18">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_24  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_16 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Tinggalkan pesan/doa untuk kami <a href="../wp-content/uploads/2022/12/Comment-Envelope.svg"><img decoding="async" loading="lazy" src="../wp-content/uploads/2022/12/Comment-Envelope.svg" width={32} height={29} alt className="wp-image-377673 alignnone size-medium" /></a></p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_with_border et_pb_module et_pb_comments_0 lang-id et_pb_comments_module et_pb_bg_layout_light et_pb_no_avatar et_pb_no_reply_button et_pb_no_comments_count" data-icon="">
                                                    <section id="comment-wrap">
                                                        <h1 id="comments" className="page_title">16 Comments</h1>
                                                        <ol className="commentlist clearfix">
                                                            {a ? a.ucapan.map((elementUcapan, index) => (  
                                                                <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id={`li-comment-${index}`} key={index}>
                                                                <article id={`comment-${index}`} className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">{elementUcapan.nama}</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:40 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>{elementUcapan.kalimat}</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                            ))
                                                            :
                                                            null
                                                            }
                                                        </ol>
                                                    </section>
                                                </div>
                                                <div className="et_pb_module et_pb_code et_pb_code_2">
                                                    <div className="et_pb_code_inner">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_19">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_25  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_5  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Terima kasih</span></h4>
                                                            <div className="et_pb_blurb_description">
                                                            <p>{a ? <span>{a.profilPasangans[0].nama} &amp; {a.profilPasangans[1].nama}</span> : ''}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_12 et_section_regular">
                                        <div className="et_pb_row et_pb_row_20">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_26  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_17 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Made with ♥ by</p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_image et_pb_image_10 et_pb_image_sticky">
                                                    <a href="#"><span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={1394} height={607} src="../wp-content/uploads/2020/03/kondangin.png" alt title="NS-Logo2" srcSet="../wp-content/uploads/2020/03/kondangin.png 1394w, ../wp-content/uploads/2020/03/kondangin.png 1280w, ../wp-content/uploads/2020/03/kondangin.png 980w, ../wp-content/uploads/2020/03/kondangin.png 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1394px, 100vw" className="wp-image-324765" /></span></a>
                                                </div>
                                                <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_2 clearfix  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <li className="et_pb_social_media_follow_network_2 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="https://www.instagram.com/kondangin.idn/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li>
                                                </ul>
                                                <div className="et_pb_module et_pb_text et_pb_text_18 et_animated et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>© all rights reserved by Kondangin.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            
            <Modal title="Alamat Penerima" open={isModalOpen} onOk={() => handleOk(1)} onCancel={() => handleCancel(1)} footer={null}>

                <div id="page-container">
                    <div id="main-content">
                        <article id="post-378634" className="post-378634 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div className="et-l et-l--post">
                                    <div className="et_builder_inner_content et_pb_gutters3">

                                    <div id="hadiah" className="et_pb_section et_pb_section_7 popup et_section_regular">
                                        <div className="et_pb_row et_pb_row_11">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_15  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_8  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Alamat Penerima</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_with_border et_pb_row et_pb_row_12">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_16  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_9  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                    {a ? <h5>{state.undangan.data.alamatGifts[0].nama}<br />{state.undangan.data.alamatGifts[0].no_hp}</h5> : []}
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_10  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                    {a ? <p>{state.undangan.data.alamatGifts[0].alamat},<br /></p> : []}
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module ">
                                                <a className="et_pb_button et_pb_button_4 copy-text et_pb_bg_layout_light" onClick={() => { }} data-icon="">Copy Address</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>




            </Modal>

            {/* Rekening */}
            <Modal title="Nomor Rekening" open={modalRekening} onOk={() => handleOk(0)} onCancel={() => handleCancel(0)} footer={null}>

                <div id="page-container">
                    <div id="main-content">
                        <article id="post-378634" className="post-378634 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div className="et-l et-l--post">
                                    <div className="et_builder_inner_content et_pb_gutters3">

                                    <div id="dana" className="et_pb_section et_pb_section_8 popup et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_13">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_17  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_11  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Nomor Rekening</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_with_border et_pb_row et_pb_row_14">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_18  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_2 et_pb_image_sticky">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={320} height={100} src="../wp-content/uploads/2022/bank/Bank-BCA-1.png"  title="Bank-BCA" srcSet="../wp-content/uploads/2022/bank/Bank-BCA-1.png 320w, ../wp-content/uploads/2022/bank/Bank-BCA-1.png 300w" sizes="(max-width: 320px) 100vw, 320px" className="wp-image-326502" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_12  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                    {a ? <h5>{state.undangan.data.rekeningGifts[0].nama}</h5> : []}
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_13  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                    {a ? <h5>{state.undangan.data.rekeningGifts[0].no_rekening}</h5> : ''}
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_3_wrapper et_pb_button_alignment_center et_pb_module ">
                                                <a className="et_pb_button et_pb_button_2 copy-text et_pb_bg_layout_light" onClick={() => { }} data-icon="">Copy Number</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_with_border et_pb_row et_pb_row_15">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_19  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_3 et_pb_image_sticky">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={320} height={116} src="../wp-content/uploads/2022/bank/Bank-Gopay.png"  title="Bank-Gopay" srcSet="../wp-content/uploads/2022/bank/Bank-Gopay.png 320w, ../wp-content/uploads/2022/bank/Bank-Gopay.png 300w" sizes="(max-width: 320px) 100vw, 320px" className="wp-image-325981" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_14  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                    {a ? <h5>{state.undangan.data.rekeningGifts[1].nama}</h5> : []}
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_15  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                    {a ? <h5>{state.undangan.data.rekeningGifts[1].no_rekening}</h5> : ''}
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module ">
                                                <a className="et_pb_button et_pb_button_3 copy-text et_pb_bg_layout_light" onClick={() => { }} data-icon="">Copy Number</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>




            </Modal>                                                    

        </div>
    )
}

export default SilverTiga


if (document.getElementById('silvertiga')) {
    ReactDOM.render(
    <Provider store={store}>
    <SilverTiga />
    </Provider>
    
    , document.getElementById('silvertiga'));
}