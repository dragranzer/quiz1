let loading = () => {
    const head = document.querySelector('head');
    const body = document.querySelector('body');
    const headAfter = `
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
        />

        <title>Menunggu</title>
    `
    const bodyAfter = `
        <div class="container text-center">
            <h1>Mohon tunggu . . .</h1>

            <!-- Optional JavaScript; choose one of the two! -->

            <!-- Option 1: Bootstrap Bundle with Popper -->
            <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossorigin="anonymous"
            ></script>
            <div class="spinner-border" role="status">
            <span class="sr-only"></span>
            </div>
        </div>

        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
        -->
    `
    head.innerHTML = headAfter;
    body.innerHTML = bodyAfter;
}

let flag = false;

let view = () => {
    const toggle =  document.getElementById("toggle");
    const isi = `
        Saya adalah orang yang senang menggeluti berbagai bidang dan hal baru. 
        Saya mempunyai semangat yang tinggi dalam menjalankan sesuatu. 
        Saya berprinsip jika menyelesaikan sesuatu tepat waktu jauh lebih penting dari pada
        harus menyempurnakan sesuatu namun telah melewati waktu.
    `
    toggle.innerHTML = isi;
}

let view2 = () => {
    const toggle2 = document.getElementById("toggle2");
    console.log(toggle2);
    const isi2 = 
    `<ul>
        <li>SDIT Al-Azhaar Gandusari Trenggalek<br>(2007-2013)</li><br>
        <li>SMPN 1 Trenggalek<br>(2013-2016)</li><br>
        <li>SMAN 1 Trenggalek<br>(2016-2019)</li><br>
        <li>Institut Teknologi Sepuluh Nopember Surabaya<br>(2019 - sekarang)</li>
    </ul>`
    toggle2.innerHTML = isi2;
}
