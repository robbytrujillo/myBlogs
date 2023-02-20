<template>
  <div>
    <header class="masthead" style="background-image: url('/img/post-sample-image.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>@robbyilhkus Blogs</h1>
              <span class="subheading">A Blog Theme by <span style="color: darkolivegreen">robby</span>Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post -->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="d-flex justify-content-end mb-4">
            <RouterLink to="/blogs/add" class="btn btn-primary text-uppercase">Add Blog</RouterLink>
          </div>
          <div v-for="(data, index) of blogs" :key="'index-blogs-' + index">
            <div class="post-preview">
              <RouterLink :to="'/blogs/' + data.id">
                <h2 class="post-title">{{ data.title }}</h2>
                <h3 class="post-subtitle">
                  <!-- {{ data.id }  -->
                  {{ data.body.slice(0, 80) }}
                </h3>
              </RouterLink>
              <p class="post-meta">
                Posted by
                <a href="#!">Robby Ilhkus</a>
                on Februari 20, 2023
              </p>
            </div>
            <hr class="my-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        // {
        //   id: 1,
        //   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
        // {
        //   id: 2,
        //   title: "qui est esse",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
        // {
        //   id: 3,
        //   title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
        // {
        //   id: 4,
        //   title: "eum et est occaecati",
        //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
        // },
      ],
    };
  },
  mounted() {
    //this.getData();
    //gunanya masukkan data blog
    if (localStorage.getItem("blogs") == null) {
      localStorage.setItem(
        "blogs",
        JSON.stringify([
          {
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
          },
          {
            id: 2,
            title: "qui est esse",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
          },
          {
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
          },
          {
            id: 4,
            title: "eum et est occaecati",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet illum ullam reprehenderit repellat eius iusto? Vel ipsam velit, cumque totam nulla, tenetur aliquid dolore rem molestiae repellat, autem ullam nemo debitis sit dignissimos reprehenderit officia? Ipsum quam deleniti odio.",
          },
        ])
      );
    } else {
      this.blogs = JSON.parse(localStorage.getItem("blogs"));
    }
  },

  // methods: {
  //   async getData() {
  //     const res = await this.axios.get("https://jsonplaceholder.typicode.com/posts");

  //     // this.blogs = res.data;
  //     var temp_array = res.data;
  //     this.blogs = temp_array.filter((item) => {
  //       return item.id > 90;
  //     });
  //   },
  // },
};
</script>
