import Link from 'next/link';
import { map } from 'lodash';
import { sidebarConfig } from './sidebarConfig';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';

const { header, main } = sidebarConfig;

export const Sidebar = ({ collapsed }) => {

    return (
        <ProSidebar
            collapsed={collapsed}
            breakPoint="md"
        >
            <SidebarHeader>
                <Menu>
                    {map(header, item =>
                        <MenuItem icon={item.icon} suffix={item.suffix} key={item.name}>
                            <Link href={item.link}>
                                <a>{item.name}</a>
                            </Link>
                        </MenuItem>
                    )}
                </Menu>
            </SidebarHeader>

            <SidebarContent>
                {map(main, (element, index) =>
                    <Menu key={index}>
                        {!(element instanceof Array) &&
                            map(Object.values(element), item =>
                                item.data ?
                                    <SubMenu title={item.title} icon={item.icon} key={item.title}>
                                        {map(item.data, (i, index) =>
                                            <MenuItem icon={i.icon} suffix={i.suffix} key={index}>
                                                <Link href={i.link}>
                                                    <a>{i.name}</a>
                                                </Link>
                                            </MenuItem>
                                        )}
                                    </SubMenu>
                                    :
                                    <MenuItem icon={item.icon} suffix={item.suffix} key={item.name}>
                                        <Link href={item.link}>
                                            <a>{item.name}</a>
                                        </Link>
                                    </MenuItem>
                            )
                        }

                        {element instanceof Array &&
                            map(element, item =>
                                <MenuItem icon={item.icon} suffix={item.suffix} key={item.name}>
                                    <Link href={item.link}>
                                        <a>{item.name}</a>
                                    </Link>
                                </MenuItem>
                            )
                        }
                    </Menu>
                )}
            </SidebarContent>
        </ProSidebar>
    )
}
