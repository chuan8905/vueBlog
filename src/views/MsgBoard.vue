<template>
  <div class="msgboard_page">
     <div class="edit_container">
        <quill-editor 
        v-model="content"
        ref="myQuillEditor"
        style="height:300px;"
        :options="editorOption">
        </quill-editor>
    </div> 
	<div class="clearfix"></div>
    <div class="submitter-radio">
      <RadioGroup v-model="disabledGroup">
          <Radio label="实名投稿"></Radio>
          <Radio label="匿名投稿"></Radio>
      </RadioGroup>
    </div>
    <div class="submitter-info" ref="submitter">
		<Input placeholder="请输入名字" style="width: 300px;display:block;margin:10px" />
		<Input placeholder="请输入联系方式或者来源网址" style="width: 300px;margin:0 10px 10px" />
    </div>
    <Button type="primary">提交稿件</Button>
  </div>
</template>

<script>
export default {
  data(){
    return {
        content: ``,
        editorOption: {},
        disabledSingle: true,
        disabledGroup: '实名投稿'
    }
  },
  computed: {
   editor() {
    return this.$refs.myQuillEditor.quill;
   },
  },
  methods: {
  
  },
  watch:{
	disabledGroup(newValue,oldValue){
		if(newValue == "匿名投稿"){
			this.$refs.submitter.style.display = 'none'
		}
		if(oldValue == "匿名投稿"){
			this.$refs.submitter.style.display = 'block'
		}
	}
  },
}
</script>

<style scoped>
 .edit_container{
   height: 366px;
   /* background-color: #fff; */
 }
  .clearfix {
   width: 100%;

   height: 60px;
 }
</style>