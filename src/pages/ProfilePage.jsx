const ProfilePage = () => {
    return (
    <div>
        <form className="container flex justify-center text-center flex-col">
            <h1 className="text-6xl">Ваш профиль</h1>
            <div className="flex justify-center my-10">
                <label className="input input-bordered flex items-center gap-2">
                    Ваше имя
                    <input type="text" className="max-w-20" placeholder=""/>
                </label>
            </div>
            <div className="flex justify-center my-10">
                <label className="input input-bordered flex items-center gap-2">
                    Ваша фамилия
                    <input type="text" className="max-w-20" placeholder=""/>
                </label>
            </div>
        </form>
    </div>
    )
}

export default ProfilePage;