<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
      @onCreated="handleCreated" />
  </div>
  <el-row>
    <el-col :span="2">
      <el-button type="primary" size="large" @click="drawer = true">发布</el-button>
    </el-col>
  </el-row>
  <el-drawer v-model="drawer" :direction="direction">
    <template #title>
      <h3>发布新闻</h3>
    </template>
    <template #default>
      <el-form :model="form" label-width="90px" label-position="right" :rules="rules">
        <el-form-item label="标题:" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="分类:" prop="type">
          <el-select v-model="form.type" placeholder="请搜索添加类别" size="large">
            <el-option v-for="item in form.options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="编辑摘要:" prop="desc">
          <el-input v-model="form.desc" :rows="5" type="textarea" maxlength="50" show-word-limit />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="">确定并发布</el-button>
      </div>
    </template>
  </el-drawer>
</template>


<script>
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef, reactive } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'


const useDrawer = () => {
  const drawer = ref(false)
  const cancelClick = () => {
      drawer.value = false
  }
  const confirmClick = () => {

  }
  return {
    drawer,
    confirmClick,
    cancelClick
  }
}

const useForm = () => {
  const rules = reactive({
    title: [
      { required: true, message: '请输入新闻标题', trigger: 'blur' },
      { min: 5, max: 30, message: '长度限制为5到30个字符', trigger: 'blur' },
    ],
    type: [
      { required: true, message: '请选择新闻类别', trigger: 'change' }
    ],
    desc: [
      { required: true, message: '请输入新闻摘要', trigger: 'blur' }
    ]
  })

  const form = reactive({
    title: '',
    type: '',
    desc: '',
    options: [
      {
        value: '财经',
        label: '财经'
      },
      {
        value: '彩票',
        label: '彩票'
      },
      {
        value: '房产',
        label: '房产'
      },
      {
        value: '股票',
        label: '股票'
      },
      {
        value: '家居',
        label: '家居'
      },
      {
        value: '教育',
        label: '教育'
      },
      {
        value: '科技',
        label: '科技'
      },
      {
        value: '社会',
        label: '社会'
      },
      {
        value: '时尚',
        label: '时尚'
      },
      {
        value: '时政',
        label: '时政'
      },
      {
        value: '体育',
        label: '体育'
      },
      {
        value: '星座',
        label: '星座'
      },
      {
        value: '游戏',
        label: '游戏'
      },
      {
        value: '娱乐',
        label: '娱乐'
      }
    ]
  })
  return {
    rules,
    form
  }
}


export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入正文内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    const { drawer, confirmClick,cancelClick } = useDrawer()
    const { form, rules } = useForm()


    return {
      editorRef,
      mode: 'default',
      toolbarConfig,
      editorConfig,
      handleCreated,
      drawer,
      confirmClick,
      cancelClick,
      form,
      rules
    };
  }
}
</script>    


<style lang = "scss" scoped >
.el-row {
  margin-top: 20px;
}
</style>