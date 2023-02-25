<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What-App-en?</title>
    <meta name="description" content="What-App-en is an app that guides user in their decision specially when they are procastinated">

    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <section id="section-what-happened">
            <div class="section-body">
                <h2>What happened?</h2>
                <div class="is-flex justify-content-center gap-1">
                    <button type="button" class="btn btn-primary btn-proceed" data-value="Y">I did, and wish I didn't</button>
                    <button type="button" class="btn btn-primary-dark btn-proceed" data-value="N">I didn't, and wish I did</button>
                <div>
            </div>
        </section>
        <section id="section-fix-it" style="display: none">
            <a href="#" class="link-return">Back</a>
            <div class="section-body">
                <h2>Can you fix it?</h2>
                <div class="is-flex justify-content-center gap-1">
                    <button type="button" class="btn btn-primary btn-proceed" data-value="Y">Yes</button>
                    <button type="button" class="btn btn-primary-dark btn-proceed" data-value="N">No</button>
                <div>
            </div>
        </section>
        <section id="section-do-it" style="display: none">
            <a href="#" class="link-return">Back</a>
            <div class="section-body">
                <h2>Can you do it now?</h2>
                <div class="is-flex justify-content-center gap-1">
                    <button type="button" class="btn btn-primary btn-proceed" data-value="Y">Yes</button>
                    <button type="button" class="btn btn-primary-dark btn-proceed" data-value="N">No</button>
                <div>
            </div>
        </section>

        <section id="section-results" style="display: none">
            <div class="section-body">
                <h2>Do better next time!</h2>
                <a href="/apps/whath-app-en/index.php">Go back to home page</a>
            </div>
        </section>
    </form>
</body>
</html>