import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { DemoService } from './posts/providers/demo/demo.service';
import { PostModule } from './post/post.module';


@Module({
  imports: [PostModule],
  controllers: [AppController, PostsController],
  providers: [AppService, DemoService],
})
export class AppModule {}
