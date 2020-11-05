export default function Router(params) {
    let router = {};
    router.pageDir = params.pageDir;
    router.routes = params.routes || [];

    router.init = function () {
        document.querySelectorAll('.router').forEach((item, index) => {
            item.addEventListener("click", function (e) {
                let event = e || window.event;
                event.preventDefault();
                window.location.hash = this.getAttribute("href");
            }, false);
        });

        window.addEventListener("hashchange", () => {
            router.routeChange();
        });


        router.routeChange();
    };

    router.routeChange = function () {
        let nowHash = window.location.hash;
        let index = router.routes.findIndex((item, index) => {
            return nowHash == ('#' + item.path);
        });

        if (index >= 0) {
            $('#router_view').load(router.pageDir + router.routes[index].url);
        } else {
            if (router.routes.length > 0) { window.location.hash = router.routes[0].path; }
        }
    };


    router.init();
}



Router.prototype.go = function (n) {
    window.history.go(n);
};