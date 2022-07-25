<template>
    <div>
        <div class="pagination-row">
            <button class="pagination-button" @click="changePage(-1)"> &lt;Previous</button>
           <span class="inner-pagination" >
                showing Page {{page}} / {{pages}}
           </span>     
            <button class="pagination-button" @click="changePage(1)">Next &gt;</button>
        </div>
    </div>
</template>

<script>
export default{
    props:['totalPages','perPageOptions'],
    data(){
        return{
            page: 1,
            perPage: this.perPageOptions[0] 
        }
    },
    computed:{
        pages(){
            const reminder = this.totalPages % this.perPage;
            if(reminder > 0){
                return Math.floor(this.totalPages / this.perPage) + 1;
            }else{
                return this.totalPages / this.perPage
            }
        }
    },
    methods:{
        changePage(value){
            // console.log(value);
            switch(value){
                case 0:  this.page = 1; break;
                case -1: this.page = this.page > 1 ? this.page -1 : this.page; break;
                case 1:  this.page = this.page < this.pages ? this.page + 1 : this.page; break;
                case this.pages : this.page = this.pages; break;
            }
            this.$emit('input', { page: this.page , perPage: this.perPage })
        }
    }
}
</script>

<style scoped>

.pagination-button{
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
}
</style>