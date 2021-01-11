<template>
  <v-container fluid class="timeline-wrapper pa-2 grey darken-1">
    <div id="scheduler" style="width: 100%; height:800px"></div>
  </v-container>
</template>
<script>
/* eslint-disable no-undef */
import '../scheduler_trial/codebase/dhtmlxscheduler';
import '../scheduler_trial/codebase/ext/dhtmlxscheduler_timeline';
import '../scheduler_trial/codebase/ext/dhtmlxscheduler_container_autoresize';

  function initScheduler() {
    const sections=[
      {key:1, label:"James Smith"},
      {key:2, label:"John Williams"},
      {key:3, label:"David Miller"},
      {key:4, label:"Linda Brown"}
    ];

    scheduler.createTimelineView({
      name:	"timeline",
      x_unit:	"minute",
      x_date:	"%H:%i",
      x_step:	30,
      x_size: 24,
      x_start: 16,
      x_length:	48,
      y_unit:	sections,
      y_property:	"section_id",
      render:"bar"
    });

    scheduler.init('scheduler',new Date(2017,5,30),"timeline");
    scheduler.parse([
      { start_date: "2017-06-30 09:00", end_date: "2017-06-30 12:00", text:"Task A-12458", section_id:1},
      { start_date: "2017-06-30 10:00", end_date: "2017-06-30 16:00", text:"Task A-89411", section_id:1},
      { start_date: "2017-06-30 10:00", end_date: "2017-06-30 14:00", text:"Task A-64168", section_id:1},
      { start_date: "2017-06-30 16:00", end_date: "2017-06-30 17:00", text:"Task A-46598", section_id:1},

      { start_date: "2017-06-30 12:00", end_date: "2017-06-30 20:00", text:"Task B-48865", section_id:2},
      { start_date: "2017-06-30 14:00", end_date: "2017-06-30 16:00", text:"Task B-44864", section_id:2},
      { start_date: "2017-06-30 16:30", end_date: "2017-06-30 18:00", text:"Task B-46558", section_id:2},
      { start_date: "2017-06-30 18:30", end_date: "2017-06-30 20:00", text:"Task B-45564", section_id:2},

      { start_date: "2017-06-30 08:00", end_date: "2017-06-30 12:00", text:"Task C-32421", section_id:3},
      { start_date: "2017-06-30 14:30", end_date: "2017-06-30 16:45", text:"Task C-14244", section_id:3},

      { start_date: "2017-06-30 09:20", end_date: "2017-06-30 12:20", text:"Task D-52688", section_id:4},
      { start_date: "2017-06-30 11:40", end_date: "2017-06-30 16:30", text:"Task D-46588", section_id:4},
      { start_date: "2017-06-30 12:00", end_date: "2017-06-30 18:00", text:"Task D-12458", section_id:4}
    ]);
  }
  export default {
    name: 'TimelinePage',
    async mounted() {
      initScheduler();
    },
  }
</script>
<style>
  @import "~@/scheduler_trial/codebase/dhtmlxscheduler_material.css";
</style>
