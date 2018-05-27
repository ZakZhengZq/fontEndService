<template>
    <Table border :columns="columns" :data="data"></Table>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
    export default {
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
                        title: 'Url',
                        key: 'url'
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
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data: []
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
            show (index) {
                this.$Modal.info({
                    title: '详情',
                    content: `Id：${this.data[index].id}<br>Title：${this.data[index].title}<br>Type：${this.data[index].type}\
                    <br>Img：${this.data[index].img}<br>Author：${this.data[index].author}\
                    <br>Abstract：${this.data[index].abstract}<br>Url：${this.data[index].url}`
                })
            },
            remove (index) {
                this.$Modal.confirm({
                    title: '确认删除？',
                    content: '确认删除这条记录？',
                    cancelText: '取消',
                    onOk: ()=>{
                        axios.post('http://localhost:3000/manager/daleteToolById', {id: this.data[index].id})
                        .then( (response)=> {
                            this.$Message.info('删除成功！');
                        })
                        .catch(function (error) {
                            this.$Message.info('删除失败！');
                        });
                        this.data.splice(index, 1);    
                    }
                });
            }
        }
    }
</script>