import { Controller, Get, Req, Query,Headers, Param, Post, Body } from '@nestjs/common';
import { CreatePostsDto } from './post.dto';

@Controller('posts')
export class PostsController {  
    @Get()
    index(@Headers() headers) {
        console.log(headers);
        return [
            {title:'hello~'}
        ];
    }
    @Get(':id')
    show(@Param() params) {
        return {
            title: `Post ${params.id}`
        }
    }

    @Post()
    store(@Body() post:CreatePostsDto) {
        console.log(post.title);

    }

}
