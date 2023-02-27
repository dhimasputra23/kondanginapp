import { Form } from 'antd';
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { getUndangan } from '../../store/action';
import moment from 'moment'
import store from '../../store';

const SilverTiga = () => {

   const state = useSelector((state) => state)

   const dispatch = useDispatch()
   moment.locale('id')

   const [RekeningModal, setRekeningModal] = useState(false)
   const [HadiahModal, setHadiahModal] = useState(false)
   const [form] = Form.useForm()


   const getUndanganShow = () => {
      dispatch(getUndangan())  
   }

   useEffect(() => {
     getUndanganShow()
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


    


    // state.undangan.map((undangan, index) => {
    //     return(
    //             <div key={index}>
    //                 <p>{undangan}</p>
    //             </div>
    //     )
    // })

    // if (state.undangan.data) {
    //     console.log('metu kene', state.undangan);


    // }
    const a = state.undangan.data



    return (
        <div>

            <div id="page-container">
                <div id="main-content">
                    <article id="post-378605" className="post-378605 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="et-l et-l--post">
                                <div className="et_builder_inner_content et_pb_gutters3">
                                    <div id="welcome-gate" className="et_pb_section et_pb_section_0 et_animated et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_0">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_with_border et_pb_module et_pb_text et_pb_text_0 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <h5>Dear,</h5>
                                                        <p>Nama Tamu</p>
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
                                                <div className="et_pb_module et_pb_code et_pb_code_1">
                                                    <div className="et_pb_code_inner">
                                                        <div className="wonderpluginaudio" id="wonderpluginaudio-382" data-audioplayerid={382} data-width={48} data-height={600} data-skin="button48" data-progressinbar="true" data-showinfo="false" data-showimage="false" data-autoplay="false" data-random="false" data-autoresize="false" data-responsive="false" data-showtracklist="false" data-tracklistscroll="true" data-showprogress="false" data-showprevnext="false" data-showloop="false" data-stopotherplayers="true" data-preloadaudio="true" data-showtracklistsearch="false" data-saveposincookie="false" data-wptracklist="false" data-removeinlinecss="true" data-showtime="false" data-showvolume="false" data-showvolumebar="true" data-showliveplayedlist="false" data-showtitleinbar="false" data-showloading="false" data-enablega="false" data-titleinbarscroll="true" data-donotinit="false" data-addinitscript="false" data-imagewidth={100} data-imageheight={100} data-loop={1} data-tracklistitem={10} data-titleinbarwidth={80} data-gatrackingid data-playbackrate={1} data-playpauseimage="playpause-48-48-1.png" data-playpauseimagewidth={48} data-playpauseimageheight={48} data-cookiehours={240} data-prevnextimage="prevnext-24-24-0.png" data-prevnextimagewidth={24} data-prevnextimageheight={24} data-volumeimage="volume-24-24-0.png" data-volumeimagewidth={24} data-volumeimageheight={24} data-liveupdateinterval={10000} data-maxplayedlist={8} data-playedlisttitle="Last Tracks Played" data-loopimage="loop-24-24-0.png" data-loopimagewidth={24} data-loopimageheight={24} data-infoformat="<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>
                                      <div class='amazingaudioplayer-info-description'>%INFO%</div>" data-jsfolder="https://ngantenstory.com/wp-content/plugins/wonderplugin-audio/engine/" style={{ display: 'block', position: 'relative', margin: '0 auto', width: 48, height: 'auto' }}>
                                                            <ul className="amazingaudioplayer-audios" style={{ display: 'none' }}>
                                                                <li data-artist data-title="HONNE - no song without you" data-album data-info="&quot;HONNE - no song without you&quot;." data-image="https://ngantenstory.com/wp-includes/images/media/audio.png" data-duration={166}>
                                                                    <div className="amazingaudioplayer-source" data-src="https://ngantenstory.com/wp-content/uploads/2022/01/HONNE-no-song-without-you.mp3" data-type="audio/mpeg" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_1 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <p><span>The Wedding Celebration of</span></p>
                                                    { a ?  <h1><span>{state.undangan.data.profilPasangans[0].nama} &amp; {state.undangan.data.profilPasangans[1].nama}</span></h1> : [] }
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href="#" data-icon="">Open Invitation</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
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
                                    <div className="et_pb_section et_pb_section_3 et_animated et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
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
                                                        <div className="clock block_clock" data-config="{&quot;style&quot;:&quot;block_clock&quot;,&quot;finish_countdown&quot;:&quot;continue&quot;,&quot;label_weeks&quot;:&quot;Week,Weeks&quot;,&quot;label_days&quot;:&quot;Day,Days&quot;,&quot;label_hours&quot;:&quot;Hour,Hours&quot;,&quot;label_minutes&quot;:&quot;Min,Mins&quot;,&quot;label_seconds&quot;:&quot;Sec,Secs&quot;,&quot;date&quot;:&quot;2023-05-01 00:00&quot;,&quot;show_weeks&quot;:false,&quot;show_days&quot;:true,&quot;show_hours&quot;:true,&quot;show_minutes&quot;:true,&quot;show_seconds&quot;:true,&quot;clock_label_position&quot;:&quot;below&quot;}">
                                                        </div>
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
                                                    <li className="et_pb_social_media_follow_network_0 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="http://instagram.com/ngantenstory/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_0 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" width={400} height={400} src="../wp-content/uploads/2022/12/silver3-1.png" alt title="silver3 (1)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-1.png 400w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-1-300x300.png 300w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-1-150x150.png 150w" sizes="(max-width: 400px) 100vw, 400px" className="wp-image-378619" /></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_6 two-columns et_pb_equal_columns">
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_module et_pb_image et_pb_image_1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={400} height={400} src="../wp-content/uploads/2022/12/silver3-2.png" alt title="silver3 (2)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-2.png 400w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-2-300x300.png 300w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-2-150x150.png 150w" sizes="(max-width: 400px) 100vw, 400px" className="wp-image-378608" /></span>
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
                                                    <li className="et_pb_social_media_follow_network_1 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="http://instagram.com/ngantenstory/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
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
                                                        <p><strong>{a ? moment(state.undangan.data.subAcaras[1].start_time).format('dddd') : [] }, {a ? moment(state.undangan.data.subAcaras[1].start_time).format('LL') : [] } <br /></strong>17:00 s/d 22:00
                                                            WIB<br /><strong>Singgasana Hotel Surabaya</strong><br />Jl. Golf 1
                                                            Surabaya, Gn. Sari,<br />Kec. Dukuh Paris, Pota Surabaya, Jawa Timur
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_8">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_1 et_animated et_pb_bg_layout_light" href="https://goo.gl/maps/iqHMxcKh1LtdWAsq8" target="_blank" data-icon="">Lihat Lokasi</a>
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
                                                        <div className="et_pb_main_blurb_image"><span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_14  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_4 et_animated et_clickable  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image"><span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                        <h5>Nama Lengkap<br />085123456789</h5>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_10  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Jl. Magelang – Yogyakarta KM.6,5,<br />Kutu Tegal,
                                                            Sinduadi,<br />Daerah Istimewa Yogyakarta 55284</p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_2 copy-text et_pb_bg_layout_light" href="#" data-icon="">Copy Address</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={320} height={100} src="../wp-content/uploads/2022/01/Bank-BCA-1.png" alt title="Bank-BCA" srcSet="https://ngantenstory.com/wp-content/uploads/2022/01/Bank-BCA-1.png 320w, https://ngantenstory.com/wp-content/uploads/2022/01/Bank-BCA-1-300x94.png 300w" sizes="(max-width: 320px) 100vw, 320px" className="wp-image-326502" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_12  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <h5>Nama Mempelai</h5>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_13  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>xxxxxxxxxx</p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_3_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_3 copy-text et_pb_bg_layout_light" href="#" data-icon="">Copy Number</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_with_border et_pb_row et_pb_row_15">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_19  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_3 et_pb_image_sticky">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={320} height={116} src="../wp-content/uploads/2022/01/Bank-Gopay.png" alt title="Bank-Gopay" srcSet="https://ngantenstory.com/wp-content/uploads/2022/01/Bank-Gopay.png 320w, https://ngantenstory.com/wp-content/uploads/2022/01/Bank-Gopay-300x109.png 300w" sizes="(max-width: 320px) 100vw, 320px" className="wp-image-325981" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_14  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <h5>Nama Mempelai</h5>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_15  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>xxxxxxxxxx</p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_4 copy-text et_pb_bg_layout_light" href="#" data-icon="">Copy Number</a>
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_10 et_section_regular">
                                        <div className="et_pb_row et_pb_row_17 et_pb_gutters1">
                                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_21  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_module et_pb_image et_pb_image_4 pa-image-1-1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={800} height={1200} src="../wp-content/uploads/2022/12/silver3-1.jpg" alt title="silver3 (1)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-1.jpg 800w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-1-480x720.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" className="wp-image-378618" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_image et_pb_image_5 pa-image-1-1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={800} height={1200} src="../wp-content/uploads/2022/12/silver3-10.jpg" alt title="silver3 (10)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-10.jpg 800w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-10-480x720.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" className="wp-image-378616" /></span>
                                                </div>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_22  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_module et_pb_image et_pb_image_6 pa-image-1-1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={800} height={1200} src="../wp-content/uploads/2022/12/silver3-9.jpg" alt title="silver3 (9)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-9.jpg 800w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-9-480x720.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" className="wp-image-378615" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_image et_pb_image_7 pa-image-1-1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={800} height={1200} src="../wp-content/uploads/2022/12/silver3-5.jpg" alt title="silver3 (5)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-5.jpg 800w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-5-480x720.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" className="wp-image-378611" /></span>
                                                </div>
                                            </div>
                                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_23  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_8 pa-image-1-1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={800} height={1200} src="../wp-content/uploads/2022/12/silver3-3.jpg" alt title="silver3 (3)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-3.jpg 800w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-3-480x720.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" className="wp-image-378609" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_image et_pb_image_9 pa-image-1-1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={800} height={1200} src="../wp-content/uploads/2022/12/silver3-2.jpg" alt title="silver3 (2)" srcSet="https://ngantenstory.com/wp-content/uploads/2022/12/silver3-2.jpg 800w, https://ngantenstory.com/wp-content/uploads/2022/12/silver3-2-480x720.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 800px, 100vw" className="wp-image-378607" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_with_border et_pb_section et_pb_section_11 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_row et_pb_row_18">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_24  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_16 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Tinggalkan pesan/doa untuk kami <a href="https://ngantenstory.com/wp-content/uploads/2022/12/Comment-Envelope.svg"><img decoding="async" loading="lazy" src="https://ngantenstory.com/wp-content/uploads/2022/12/Comment-Envelope.svg" width={32} height={29} alt className="wp-image-377673 alignnone size-medium" /></a></p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_with_border et_pb_module et_pb_comments_0 lang-id et_pb_comments_module et_pb_bg_layout_light et_pb_no_avatar et_pb_no_reply_button et_pb_no_comments_count" data-icon="">
                                                    <section id="comment-wrap">
                                                        <h1 id="comments" className="page_title">16 Comments</h1>
                                                        <ol className="commentlist clearfix">
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197933">
                                                                <article id="comment-197933" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Abichandra</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:40 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menempuh hidup baru dengan kasihmu.
                                                                                💌💌😘 Semoga cinta kalian terus bertumbuh dan
                                                                                semakin menguat setiap harinya. ❤️❤️❤️🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197917">
                                                                <article id="comment-197917" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Bamantara</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:38 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menjalani hari-hari pasca pernikahan.
                                                                                Bahagia selalu wahai saudaraku. Semoga Allah
                                                                                Swt. selalu menuntunmu beserta istri dan
                                                                                anak-anak meraih Cinta-Nya.🥰🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197901">
                                                                <article id="comment-197901" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Banurasmi 🥰</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:35 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Turut berbahagia dengan pernikahan kalian. ❤️❤️
                                                                                Semoga pernikahan sebagai tanda awal perjalanan
                                                                                cinta kalian yang sesungguhnya diridhai-Nya.🥰🥰
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197885">
                                                                <article id="comment-197885" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Cakrawala</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:33 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>🥰 Selamat menjalani pernikahan yang bahagia,
                                                                                sahabatku. Selamat mengemban amanah baru sebagai
                                                                                (suami/istri). Lakukan semua karena ridha
                                                                                pada-Nya.🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197869">
                                                                <article id="comment-197869" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Danurdara</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:31 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Selamat menikah, sahabatku tersayang. Semoga
                                                                                kalian menjadi pasangan sejati sampai maut
                                                                                memisahkan, lekas dikaruniai keturunan yang
                                                                                saleh dan salehah. Aamiin. ❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197853">
                                                                <article id="comment-197853" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Gantari</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:26 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menikah, sahabatku tersayang. Semoga
                                                                                kalian menjadi pasangan sejati sampai maut
                                                                                memisahkan, lekas dikaruniai keturunan yang
                                                                                saleh dan salehah. Aamiin. 😘😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197837">
                                                                <article id="comment-197837" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Herdian</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:23 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Doa terbaik untuk kamu dan pasangan, semoga
                                                                                samawa ’till jannah dan membangun keluarga
                                                                                sesuai syariat Al-Qur’an dan hadis.</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197818">
                                                                <article id="comment-197818" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Indriaya</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:20 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Cinta merupakan anugerah terbaik yang
                                                                                diberikan Tuhan.🥰 Cinta juga merupakan
                                                                                penghargaan besar bagi mereka yang menerima.
                                                                                Selamat menikah, jagalah anugerah tersebut
                                                                                dengan baik. ❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197805">
                                                                <article id="comment-197805" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Jumantara</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:13 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>🥰🥰 Temanku ini sudah punya gandengan, aku masih
                                                                                betah dalam kejombloan. Selamat menikah, teman.
                                                                                Aku pasti segera menyusulmu! 😘😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197786">
                                                                <article id="comment-197786" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Karunia</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:08 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Kunci membangun hubungan pernikahan yang kuat dan
                                                                                harmonis adalah saling teguh memegang komitmen
                                                                                bersama. Selamat menikah, semoga menjadi
                                                                                pasangan yang abadi. 🥰🥰🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197770">
                                                                <article id="comment-197770" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Lelana</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:03 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Happy wedding! ❤️<br />
                                                                                Sudah enggak ada lagi galau meratapi status
                                                                                jomblo, ya? Berbahagialah selalu, dan semoga
                                                                                segera diberkahi dengan momongan.❤️❤️❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197754">
                                                                <article id="comment-197754" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Manika</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:00 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>🥰 Saling mendukung, saling melengkapi, dan
                                                                                saling menghargai adalah tiga hal yang
                                                                                menguatkan sebuah ikatan cinta. Jadilah pasangan
                                                                                yang berbahagia. Selamat menempuh bahtera rumah
                                                                                tangga. 🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197738">
                                                                <article id="comment-197738" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Nareswara</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:58 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>💌 Selamat menikah Kak. Jadilah imam yang baik
                                                                                bagi istri dan anakmu nanti. Jadilah panutan
                                                                                yang baik dan suami yang dikagumi. 💌</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197722">
                                                                <article id="comment-197722" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Ningrum ❤️</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:57 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Tetanggaku yang sudah jadi teman bermain dari
                                                                                kecil, selamat menikah! Semoga bahagia dan
                                                                                dilancarkan rezekinya selalu. Jangan lupakan
                                                                                teman kecilmu ini, ya! ❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197710">
                                                                <article id="comment-197710" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Pramudya 🥰</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:55 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️❤️ Hari perayaan pernikahanmu hanya akan
                                                                                berlangsung sesaat, tapi semoga cintamu dan
                                                                                cintanya akan tetap tumbuh. Semoga jadi pasangan
                                                                                yang sempurna, Selamat menempuh hidup baru
                                                                                sahabatku. 🥰😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197690">
                                                                <article id="comment-197690" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">❤️ Raditya ❤️</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:50 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menikah, selamat menjalani kehidupan
                                                                                pernikahan.<br />
                                                                                Semoga Tuhan selalu menjaga kalian dan anak-anak
                                                                                kelak. 😘😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
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
                                                                <p><span>Jessica &amp; Andrian</span></p>
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
                                                    <a href="https://ngantenstory.com/"><span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={1394} height={607} src="../wp-content/uploads/2021/12/NS-Logo2.png" alt title="NS-Logo2" srcSet="https://ngantenstory.com/wp-content/uploads/2021/12/NS-Logo2.png 1394w, https://ngantenstory.com/wp-content/uploads/2021/12/NS-Logo2-1280x557.png 1280w, https://ngantenstory.com/wp-content/uploads/2021/12/NS-Logo2-980x427.png 980w, https://ngantenstory.com/wp-content/uploads/2021/12/NS-Logo2-480x209.png 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1394px, 100vw" className="wp-image-324765" /></span></a>
                                                </div>
                                                <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_2 clearfix  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <li className="et_pb_social_media_follow_network_2 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="https://www.instagram.com/ngantenstory/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li>
                                                </ul>
                                                <div className="et_pb_module et_pb_text et_pb_text_18 et_animated et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>© all rights reserved by NgantenStory.</p>
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