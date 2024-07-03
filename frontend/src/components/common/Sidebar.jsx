import XSvg from "../svgs/X";
import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Sidebar = () => {
	const queryClient = useQueryClient();

	const { data } = useQuery({ queryKey: ["authUser"] });

	const { mutate } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch("/api/auth/logout", {
					method: "POST",
				});

				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
			} catch (error) {
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Logout Successful");
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
		onError: () => {
			toast.error("Something went wrong");
		},
	});

	const handleClick = (e) => {
		e.preventDefault();
		mutate();
	};

	return (
		<div className='md:flex-[2_2_0] max-w-32 min-[375px]:max-w-52 '>
			<div className='sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-full md:pl-4 pt-4'>
				<Link
					to='/'
					className='flex justify-center md:justify-start hover:bg-stone-900 md:w-fit w-full rounded-full py-2 md:p-3'
				>
					<XSvg className=' w-9 h-9 rounded-full fill-white ' />
				</Link>
				<ul className='flex flex-col gap-3 mt-4'>
					<li className='flex justify-center md:justify-start'>
						<NavLink
							to='/'
							style={({ isActive }) => {
								return {
									color: isActive ? "#1d9bf0" : "",
								};
							}}
							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 px-4 max-w-fit cursor-pointer'
						>
							<MdHomeFilled className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Home</span>
						</NavLink>
					</li>
					<li className='flex justify-center md:justify-start'>
						<NavLink
							to='/notifications'
							style={({ isActive }) => {
								return {
									color: isActive ? "#1d9bf0" : "",
								};
							}}
							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 px-4 max-w-fit cursor-pointer'
						>
							<IoNotifications className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Notifications</span>
						</NavLink>
					</li>

					<li className='flex justify-center md:justify-start'>
						<NavLink
							to={`/profile/${data?.username}`}
							style={({ isActive }) => {
								return {
									color: isActive ? "#1d9bf0" : "",
								};
							}}
							className='flex gap-3 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-2 px-4 max-w-fit cursor-pointer'
						>
							<FaUser className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Profile</span>
						</NavLink>
					</li>
				</ul>
				{data && (
					<Link
						to={`/profile/${data.username}`}
						className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full'
					>
						<div className='avatar hidden md:inline-flex'>
							<div className='w-8 rounded-full'>
								<img src={data?.profileImg || "/avatar-placeholder.jpg"} />
							</div>
						</div>
						<div className='flex justify-center md:justify-between flex-1'>
							<div className='hidden md:block'>
								<p className='text-white font-bold text-sm truncate'>
									{data?.fullName}
								</p>
								<p className='text-slate-500 text-sm'>@{data?.username}</p>
							</div>
							<button onClick={(e) => handleClick(e)}>
								<BiLogOut className='w-5 h-5 cursor-pointer' />
							</button>
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};
export default Sidebar;
