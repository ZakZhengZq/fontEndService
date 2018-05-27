<template>
    <div>
        <div v-if="!isChanging">
            <Table highlight-row ref="currentRowTable" :columns="columns" :data="data" @on-row-click="currentRow"></Table>
            <Button @click="handleClearCurrentRow">清除所选</Button>
            <Button @click="handleChangeCurrentRow">修改</Button>
        </div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" v-if="isChanging">
            <FormItem label="标题" prop="title">
                <Input v-model="formValidate.title" placeholder="Enter your title"></Input>
            </FormItem>
            <FormItem label="作者" prop="author">
                <Input v-model="formValidate.author" placeholder="Enter the author"></Input>
            </FormItem>
            <FormItem label="类型" prop="type">
                <Select v-model="formValidate.type" placeholder="Select your type">
                <Option value="Node.js">Node.js</Option>
                <Option value="Web开发">Web开发</Option>
                <Option value="工具&平台">工具&平台</Option>
                <Option value="前段杂谈">杂谈</Option>
                </Select>
            </FormItem>
            <FormItem label="发布日期">
                <Row>
                    <Col span="5">
                        <FormItem prop="date">
                            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="5">
                        <FormItem prop="time">
                            <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                        </FormItem>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="封面图片" prop="img">
                <Input v-model="formValidate.img" placeholder="Enter the img url"></Input>
            </FormItem>
            <FormItem label="来源" prop="comefrom">
                <RadioGroup v-model="formValidate.comefrom">
                    <Radio label="原创">原创</Radio>
                    <Radio label="转载">转载</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="简述" prop="abstract">
                <Input v-model="formValidate.abstract" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="正文" prop="url">
                <Input v-model="formValidate.url" placeholder="Enter the url"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">完成</Button>
                <Button type="ghost" @click="handleReset" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import 'simplemde/dist/simplemde.min.css'
import 'github-markdown-css'
import axios from 'axios'
/* eslint-disable */
    export default {
        components: {
            markdownEditor
        },
        data () {
            return {
                columns: [
                    {
                        title: 'Id',
                        key: 'id'
                    },
                    {
                        title: 'Title',
                        key: 'title'
                    },
                    {
                        title: 'Type',
                        key: 'type'
                    },
                    {
                        title: 'Img',
                        key: 'img'
                    },
                    {
                        title: 'Author',
                        key: 'author',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.author)
                            ]);
                        }
                    }
                ],
                data: [],
                isChanging: false,
                configs: {
                toolbar: [{
                    name: 'fullscreen',
                    action: function customFunction (editor) {
                    markdownEditor.toggleFullScreen()
                    },
                    className: 'fa fa-arrows-alt no-disable no-mobile',
                    title: '全屏'
                }]
                },
                formValidate: {
                    title: '',
                    author: '',
                    type: '',
                    img: '',
                    comefrom: '',
                    date: '',
                    time: '',
                    abstract: '',
                    url: ''
                },
                ruleValidate: {
                    title: [
                    { required: true, message: 'The title cannot be empty', trigger: 'blur' }
                    ],
                    author: [
                    { required: true, message: 'author cannot be empty', trigger: 'blur' }
                    ],
                    type: [
                    { required: true, message: 'Please select the type', trigger: 'change' }
                    ],
                    img: [
                    { required: true, message: 'Please select the img', trigger: 'blur' }
                    ],
                    url: [
                    { required: true, message: 'Please select the url', trigger: 'blur' }
                    ],
                    comefrom: [
                    { required: true, message: 'Please select', trigger: 'change' }
                    ],
                    date: [
                    { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                    { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    abstract: [
                    { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
            axios.get('http://localhost:3000/manager/getTools')
            .then((response) => {
                this.data = response.data.rows;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        methods: {
            handleClearCurrentRow () {
                this.$refs.currentRowTable.clearCurrentRow();
            },
            handleChangeCurrentRow () {
                this.isChanging = true
            },
            currentRow(data) {
                data.time = ''
                this.formValidate = data
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:3000/manager/upSertTool', {
                            formValidate: this.formValidate
                        })
                        .then((response) => {
                            this.$Message.success('增加/修改成功!')
                        })
                        .catch(function (error) {
                            console.log(error)
                            this.$Message.error('网络错误!')
                        })
                    } else {
                        this.$Message.error('Fail!')
                    }
                })},
                handleReset () {
                    this.isChanging = false
                }
        }
    }
</script>