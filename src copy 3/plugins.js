// 定义插件
export default{
    install(Vue,options){
        console.log(options);
        // 定义一个全局过滤器
        Vue.filter('filter',function(value){
            return value.slice(0,4);
        });

        // 定义一个全局自定义指令
        Vue.directive('fbind',{
            bind(el,binding){
                el.value = binding.value;
                console.log(el,binding);
            },
            inserted(el){
                el.focus();
            },
            // update(el,binding){
            //     el.value = binding.value;
            // }

        });

        // 配置一个全局混入
        Vue.mixin({
            data(){
                return {
                    x: 1,
                    y: 2
                }
            }
        })

        // 给Vue原型上添加方法 此时 vm 和 组件实例对象都可用
        Vue.prototype.hello = () => {console.log("你好");} 
    }
}